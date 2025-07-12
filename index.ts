import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

// Create an AWS resource (S3 Bucket)
const firstBucket = new aws.s3.BucketV2("primeiro-bucket-pos-rockesteat", {
    bucket: 'primeiro-bucket-pos-rocketseat',
    tags: {
        IAC: 'true'
    }
});

// Create an AWS resource (S3 Bucket)
const secondBucket = new aws.s3.BucketV2("primeiro-bucket-pos-rockesteat", {
    bucket: 'primeiro-bucket-pos-rocketseat',
    tags: {
        IAC: 'true'
    }
});

// Create an AWS resource (S3 Bucket)
const thirdBucket = new aws.s3.BucketV2("primeiro-bucket-pos-rockesteat", {
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
export const firstBucketName = firstBucket.id;
export const firstBucketRegion = firstBucket.region;
export const firstBucketArn = firstBucket.arn;

// Export the name of the bucket
export const secondBucketName = secondBucket.id;
export const secondBucketRegion = secondBucket.region;
export const secondBucketArn = secondBucket.arn;

export const ecrName= ecr.name;
export const ecrRepositoryUrl= ecr.repositoryUrl;