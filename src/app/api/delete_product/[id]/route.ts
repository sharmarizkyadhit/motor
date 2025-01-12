import Product from "@/libs/models/Product";
import { connectMongoDB } from "@/libs/MongoConnect";
import { NextRequest, NextResponse } from "next/server";

export async function Deleted(request: NextRequest, URLParams: any) {
    try{

        const id = URLParams.params.id



        await connectMongoDB()


        await Product.findByIdAndDelete(id);

        return NextResponse.json({msg: "Product Deleted Successfully"})
    } catch (error){
        return NextResponse.json({
            error,
            msg:"Something Went Wrong"
        }, {status: 400 })
    }
    
}