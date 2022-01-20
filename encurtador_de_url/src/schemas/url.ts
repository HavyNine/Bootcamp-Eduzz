import {  getModelForClass, prop, ReturnModelType} from "@typegoose/typegoose";



class URL{
    @prop({ type: () => [String]})
    public hash?: string;

    @prop({ type: () => [String]})
    public originURL?: string;

    @prop({ type: () => [String]})
    shortURL?: string;

}

export const URLModel = getModelForClass(URL);