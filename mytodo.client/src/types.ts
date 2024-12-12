
/**
 * Representing Markdown documentation.
 */
export type MarkDown = string;

/**
 * Comments are pieces of text left in the 
 */
export interface Comment {
  // unique id
  readonly uuid: string;
  authorUuuid: string;
  publish: Date;
  content: MarkDown;
};
export const COMMENT_PREFIX = "comt-";

/**
 * Tasks
 */
export interface Task {


  readonly uuid: string;

  // User uuid or Project uuid
  owner: string;

  title: string;

  description: MarkDown;

  done: boolean;

  due?: Date;
  remind?: Date;
  category: string;
  tags: string[];

  urgency?: ('low' | 'med' | 'high');
  priority?: ('low' | 'med' | 'high');

  steps: Task[];

  // User.uuid or empty if none.
  asignee: string; 
  
  comments: Comment[];
};
export const TASK_PREFIX = "task-";


export interface Habit {

  readonly uuid: string;
  owner: string; // User uuid

  title: string;
  description: string;
  steps: Task[];

  frequency: number;
  startDate: Date;
  completes: Date[];
}
export const HABIT_PREFIX = "habt-";

export interface Project {
  readonly uuid: string;
  owner: string; // User uuid

  title: string;
  description: string;
  tags: string[]; 
  team: string[]; // User uuids
  tasks: { [category: string]: Task[] };
}
export const PROJECT_PREFIX = "proj-";

export interface User {
  readonly uuid: string; 
  username: string;
  email: string;
  profile: string;
  bio: string;
  friends: string[]; // User uuids.

}
export const USER_PREFIX = "user-"