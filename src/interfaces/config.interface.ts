interface IDataBaseProps {
  type: string;
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
}

export interface IConfigProps {
  port: number;
  database: IDataBaseProps;
}
