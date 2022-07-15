const AwsS3 = require("aws-sdk/clients/s3")

export class S3 {
    private instance: typeof AwsS3;

    constructor(){
        this.instance = new AwsS3({
            region: `${process.env.AWS_REGION}`,
            accessKeyId: `${process.env.AWS_ACCESS_KEY_ID}`,
            secretKey: `${process.env.AWS_SECRET_ACCESS_KEY}`
        })
    }

    public getInstance(): typeof AwsS3 {
        return this.instance;
    }
}