import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 100,
    unique: true,
  })
  login: string;

  @Column({
    type: 'text',
  })
  password: string;

  @Column({
    type: 'text',
    unique: true,
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 50
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 50
  })
  surname: string;

  @Column({
    type: 'text',
  })
  avatar: string;
}