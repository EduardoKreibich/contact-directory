import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1700778193002 implements MigrationInterface {
    name = 'InitialMigration1700778193002'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "UQ_eff09bb429f175523787f46003b"`);
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "UQ_1e0e630a17f7505a29a76b9af7f"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "UQ_1e0e630a17f7505a29a76b9af7f" UNIQUE ("telephone")`);
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "UQ_eff09bb429f175523787f46003b" UNIQUE ("email")`);
    }

}
