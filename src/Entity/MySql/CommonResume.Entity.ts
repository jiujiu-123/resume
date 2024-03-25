import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 *  岗位通用简历分类
 */
@Entity()
export class CommonResume {
  @PrimaryGeneratedColumn()
  id: String;
  @Column({ comment: '前端' })
  frontEnd: string;
  @Column({ comment: '后端' })
  backEnd: string;
  @Column({ comment: 'AI' })
  AI: string;
  @Column({ comment: '实习' })
  practice: string;
  @Column({ comment: '应届' })
  freshGraduate: string;
}
