export class Contact {
  id?: number;
  firstname?: string;
  lastname?: string;
  othernames?: string;
  title?: string;
  picture?: string;
  gender?: string;
  about?: string;
  address?: string;
  town?: string;
  country?: string;
  postal_code?: string;
  email?: string;
  phone?: string;
  is_deleted: boolean;
  created_at: Date;
  updated_at: Date;
  events?: any[];
}
