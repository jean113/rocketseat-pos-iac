import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.BucketV2("primeiro-bucket-pos-rockesteat", {
    bucket: 'primeiro-bucket-pos-rocketseat',
    tags: {
        IAC: 'true'
    }
});

const ecr = new aws.ecr.Repository('primeiro-ecr-pos-rockesteat', {
    name: 'primeiro-ecr-pos-rockesteat',
    imageTagMutability: 'IMMUTABLE'
})

// Export the name of the bucket
export const bucketName = bucket.id;
export const bucketRegion = bucket.region;
export const bucketArn = bucket.arn;

export const ecrName= ecr.name;
export const ecrRepositoryUrl= ecr.repositoryUrl;