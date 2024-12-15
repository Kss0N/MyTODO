import { v4 as uuidv4 } from 'uuid';

/**
 * Representing Markdown documentation.
 */
export type MarkDown = string;

export type Uuid = string;

export const UUID_PREFIX = {
  Comment: 'cmnt-',
  Task: 'task-',
  Habit: 'habt-',
  Project: 'proj-',
  User: 'user-',
};

/**
 * Comments are pieces of text left in the 
 */
export class Comment {

  // unique id
  readonly uuid: string;

  // user uuid of author
  authorUuuid: string;

  // publishing time.
  published: Date;

  // content
  content: MarkDown; 

  // last edit. if undefined, the comment hasn't been edited.
  lastEdit?: Date;

  constructor(authorUuid: string, published?: Date, content: string = '', lastEdit?: Date, uuid?: string) {
    this.uuid = uuid || UUID_PREFIX.Comment + uuidv4();
    this.authorUuuid =  authorUuid;
    this.published = published || new Date();
    this.content = content;
    this.lastEdit = lastEdit;

  }

};

/**
 * Tasks
 */
export class Task {

  readonly uuid: Uuid;

  // User or Project uuid
  owner: Uuid;

  title: string;

  description?: MarkDown;

  done: boolean;

  due?: Date;
  remind?: Date;
  category: string;
  tags: string[];

  urgency?: ('low' | 'med' | 'high');
  priority?: ('low' | 'med' | 'high');

  steps: Task[];

  // User.uuid or empty if none.
  assignee: Uuid; 
  
  comments: Comment[];

  constructor(
    owner: Uuid,
    title: string,
    desc: MarkDown = '',
    done: boolean = false,
    due?: Date,
    remind?: Date,
    category: string = '',
    tags: string[] = [],
    urgency?: ('low' | 'med' | 'high'),
    priority?: ('low' | 'med' | 'high'),
    steps: Task[] = [],
    asignee: Uuid = '',
    comments: Comment[] = [],
    uuid?: Uuid)
  {
    this.uuid = uuid || UUID_PREFIX.Task+uuidv4();
    this.owner = owner; 
    this.title = title;
    this.description = desc;
    this.done = done;
    this.due = due;
    this.remind = remind;
    this.category = category;
    this.tags = tags;
    this.urgency = urgency;
    this.priority = priority;
    this.steps = steps;
    this.assignee = asignee;
    this.comments = comments;
  }

};


export class Habit {

  readonly uuid: Uuid;

  // User uuid
  owner: Uuid; 

  title: string;
  frequency: number;
  startDate: Date;
  description: string;
  steps: Task[];
  completes: Date[];

  constructor(
    owner: Uuid,
    title: string,
    frequency: number,
    startDate: Date,
    description: string = '',
    steps: Task[] = [],
    completes: Date[],
    uuid: Uuid)
  {
    this.uuid = uuid || UUID_PREFIX.Habit + uuidv4();
    this.owner = owner;
    this.title = title;
    this.frequency = frequency;
    this.startDate = startDate;
    this.description = description;
    this.steps = steps;
    this.completes = completes;
  }

}

export class Project {
  readonly uuid: Uuid;
  owner: Uuid; // User uuid

  title: string;
  description: string;
  tags: string[]; 
  team: Uuid[]; // User uuids
  tasks: { [category: string]: Task[] };

  constructor(owner: Uuid, title: string, description: string = '', tags: string[] = [], team: Uuid[] = [], tasks: { [category: string]: Task[] } = {}, uuid: Uuid) {
    this.uuid = uuid || UUID_PREFIX.Project+uuidv4();
    this.owner = owner;
    this.title = title;
    this.description = description;
    this.tags = tags;
    this.team = team;
    this.tasks = tasks;
  }

}

export class User {
  readonly uuid: Uuid; 
  username: string;
  email: string;
  profile: URL;
  bio: string;
  friends: Uuid[]; // User uuids.

  constructor(username: string, email: string, profile: URL, bio: string = '', friends: Uuid[] = [], uuid: Uuid) {
    this.uuid = uuid + UUID_PREFIX.User+uuidv4();
    this.username = username;
    this.email = email;
    this.profile = profile;
    this.bio = bio;
    this.friends = friends;
  }
}