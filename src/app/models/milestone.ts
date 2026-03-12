export type MilestoneStatus = 'done' | 'in-progress' | 'pending';

export interface Milestone {
  title: string;
  date: string;
  description: string;
  status: MilestoneStatus;
}
