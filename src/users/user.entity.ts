import {Entity, Column, PrimaryGeneratedColumn, AfterInsert, AfterRemove, AfterUpdate} from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string;

    @Column()
    password: string;

    @AfterInsert()
    logInsert() {
        console.log("Inserted Usert With ID: ", this.id)
    }

    @AfterRemove()
    logRemove() {
        console.log("removed Usert With ID: ", this.id)
    }

    @AfterUpdate() 
    logUpdate() {
        console.log("updated Usert With ID: ", this.id)
    }

}