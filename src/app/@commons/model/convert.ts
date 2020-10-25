export interface Convert {
  id: string;
  components: Component[];
  name: string;
  global_status: number;
  date_created: Date;
  user_created: string;
  source: string;
  company: string;
  metadata: ConvertMetadata;
}


export interface StorePath {
  bucket: string;
  name: string;
}


export interface ConvertMetadata {
  invoice_number: string;
  seller_name: string;
  buyer_name: string;
  item_count: number;
  amount_net: number;
  invoice_date: Date;
}

export interface Component {
  type: string;
  role: string;
  status: string;
  order: number;
  data: any;
  filename: string;
  store_path: StorePath;
}
