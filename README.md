# Cloud Resume Challenge

Series of challenges, which deepen AWS knowledge and provide an opportunity to perform technical experience using AWS.
The main goal is to create and deploy the static website hosting a resume of the pretender.

The additional steps include integrating it with database, providing an API, using automation for building, testing and deploying the code and the infrastructure and many others.
Apart from standard objective, most of the steps include optional extensions recommendation. They are different from the core task and focus on practicing concrete set of skills in one of the specific areas.

## Table of Contents

- [Cloud Resume Challenge](#cloud-resume-challenge)
  - [Table of Contents](#table-of-contents)
  - [Benefits of the challenge](#benefits-of-the-challenge)
  - [Challenge stages](#challenge-stages)
    - [Stage 0 - Certification](#stage-0---certification)
    - [Stage 1 - Creating Front End](#stage-1---creating-front-end)
      - [1.1 HTML](#11-html)
      - [1.2 CSS](#12-css)
      - [1.3 JavaScript](#13-javascript)
      - [1.4 Static assets](#14-static-assets)
      - [1.5 CloudFront](#15-cloudfront)
    - [Stage 2 - Building the API](#stage-2---building-the-api)
      - [2.1 Database](#21-database)
      - [2.2 API](#22-api)
      - [2.3 Python](#23-python)
    - [Stage 3 - Frontend \& Backend integration](#stage-3---frontend--backend-integration)
      - [3.1 Dynamic counter value](#31-dynamic-counter-value)
    - [Step 4 - Automation \& CI/CD](#step-4---automation--cicd)
      - [4.1 CI/CD](#42-cicd)

## Benefits of the challenge

After completing the challenge, the practitioner is able to gain multiple skills, related (but not limited) to AWS ecosystem:

- Software Development (Frontend / Backend perspective)
- IaC (Infrastructure as Code) using CloudFormation, SAM, CDK
- CI/CD (AWS CodeBuild, AWS CodeDeploy, AWS CodePipeline)
- Serverless Architecture on AWS (Lambda, API Gateway, DynamoDB, S3)
- Security (IAM, bucket policies, API authentication/authorization)
- Networking (DNS if using Route53, ALB, Routing/IP traffic if creating own VPCs/subnets)

## Challenge stages

### Stage 0 - Certification

First challenge is to complete [AWS Cloud Practitioner](https://aws.amazon.com/certification/certified-cloud-practitioner/) certification exam.\
I [successfully passed] the exam on 06/09/2023

> I have recently scheduled my [AWS Certified Solutions Architect – Associate](https://aws.amazon.com/certification/certified-solutions-architect-associate/) exam.\
> [Here] on 07/24/2024

### Stage 1 - Creating Front End

This section is about building the visual representation of resume using plain HTML, CSS and JavaScript (which gets more important at stage 2).

#### 1.1 HTML

The resume should be created using HTML. It does not have to be pretty or contain sublime styling, since the challenge is not about perfect styling and responsive web design. Created the HTML by myself, using no frameworks.
 
#### 1.2 CSS

The resume should be just a little styled using *CSS*, to somewhat resemble the actual resume document.

#### 1.3 JavaScript

The resume should include simple JS script for counting number of visitors.\
The first version was using `localStorage` class as a counter storage and then migrated to *AWS DynamoDB* Table for storing the visitors.

#### 1.4 Static assets

The resume contains multiple icons in *SVG* format.\
All of them were downloaded under the [iconmonstr license](https://iconmonstr.com/license/) from [iconmonstr.com](https://iconmonstr.com/share-11-svg/).

#### 1.5 CloudFront

The resume page is accessible only via CloudFront Distribution.\
The S3 Bucket serving the static content has all all public access blocked - [OAC](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html) is configured with said S3 bucket as the origin with the bucket only allowing requests from CloudFront OAC.\
The requests from HTTP are redirected to HTTPS.

### Stage 2 - Building the API

This section is about extending local visitor counter (written in JavaScript) to a full API which saves the values in AWS DynamoDB database.

#### 2.1 Database

The visitor counter is saved and retrieved from a single Table in AWS DynamoDB.\
There is a single Item (record) in DynamoDB table, which gets constantly updated when a new visitor opens the page.

| Primary key                | Attributes |
| -------------------------- | ---------- |
| Partition key: Visitor-Cnt | count      |
| visitors                   | 100        |

#### 2.2 API

The JavaScript code is not talking directly to the DynamoDB.\
Instead, Amazon API Gateway is set with one POST route, proxying request to a Lambda function responsible for updating a visitor counter.

#### 2.3 Python

Lambda Function, responsible for handling the business logic of an application (in this case, updating and returning overall visitors count) is written using Python's latest version for Lambda [as of writing this section] (06.30.2024).

### Stage 3 - Frontend & Backend integration

This section is about embedding the value coming from DynamoDB through AWS Lambda into the JavaScript code, making the page dynamically count and display the visitors number.

#### 3.1 Dynamic counter value

The script responsible for retrieving and updating the counter is found in `website/script.js` file.\
It makes an HTTP POST request to the API Gateway endpoint in order to retrieve & update counter value on each DOM load.

### Step 4 - Automation & CI/CD

#### 4.1 CI/CD

To streamline the configuration changes, the deployment is not done manually, but rather executed in an automated manner using GitHub Actions and a dedicated pipeline workflow.\
All steps and stages can be seen in `.github/workflows/main.yaml` file.



