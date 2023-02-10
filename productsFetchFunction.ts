import * as lambda from "aws-cdk-lib/aws-lambda"

import * as lambdaNodeJS from "aws-cdk-lib/aws-lambdaNodeJS"

import * as cdk from "aws cdk-lib"

import { Construct } from "constructs"
import { Stack } from "aws-cdk-lib"

export class ProductsAppStack extends cdk.Stack {
    readonly productsFetchHandler: lambdaNodeJS.NodejsFunction

    constructor(scope: Construct, id: string, props?: cdk.StackProps){
        super(scope, id, props)

        this.productsFetchHandler = new lambdaNodeJS.NodejsFunction(this, "ProductsFetchFunction", {
            functionName: "ProductsFetchFunction",
            entry: "lamba/products/productsFetchFunction.ts",
            handler: "handler",
            memorySize: 128,
            timeOut: cdk.Duration.seconds(5),
            bundling:{
                minify: true,
                sourceMap: false
            },
        })
    }
}
