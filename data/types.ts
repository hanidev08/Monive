export type ExperimentStatus = "completd" | "incoming" | "in-progress";

export type ExperimentProject = {
  id: string;
  title: string;
  date: string;
  status: ExperimentStatus;
  image?: string;
  description?: string;
  link?: string;
};

export type ExperimentData = {
  projects: ExperimentProject;
  metadata: {
    totalCount: number;
    completedCount: number;
    incomingCount: number;
  };
};
