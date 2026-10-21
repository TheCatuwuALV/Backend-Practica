import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { timestamp } from "rxjs";

@Schema ({ timestamps: true })

export class Task {
    @Prop({required: true, unique: true, trim: true })
    title: string;

    @Prop({required: true, unique: true })
    description: string;

    @Prop({ unique: true })
    default: string;

    @Prop({ default: false })
    done: boolean;
}

export const TaskChema = SchemaFactory.createForClass(Task);