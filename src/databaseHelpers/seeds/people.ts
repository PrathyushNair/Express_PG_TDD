import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("people").del();

    // Inserts seed entries
    await knex("people").insert([
        { name:"user1", gender: "male",email:"us1@gmail.com",password:"qwertyabc",age:34 }
       
    ]);
};
