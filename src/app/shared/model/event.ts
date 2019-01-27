export class Event {
  id?: number;
  title: string;
  start: Date | string;
  end: Date | string;
  color: string;
  reminders?: any[];
  location?: string;
  notes?: string;
  invites?: any[];
  completed?: boolean;
}
