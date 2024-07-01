<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cloud Resume Challenge README</title>
</head>
<body>
    <h1>AWS Cloud Resume Challenge</h1>
    <p>This repository documents the steps and solutions for the AWS Cloud Resume Challenge. The challenge involves creating a cloud-based resume using various AWS services and CI/CD practices.</p>

    <h2>Table of Contents</h2>
    <ol>
        <li><a href="#overview">Overview</a></li>
        <li><a href="#steps-and-solutions">Steps and Solutions</a></li>
        <ul>
            <li><a href="#step-1-html-and-css">Step 1: HTML and CSS</a></li>
            <li><a href="#step-2-javascript">Step 2: JavaScript</a></li>
            <li><a href="#step-3-s3-bucket-for-static-website-hosting">Step 3: S3 Bucket for Static Website Hosting</a></li>
            <li><a href="#step-4-cloudfront-for-cdn">Step 4: CloudFront for CDN</a></li>
            <li><a href="#step-5-custom-domain-and-ssl">Step 5: Custom Domain and SSL</a></li>
            <li><a href="#step-6-dynamodb-for-visitor-count">Step 6: DynamoDB for Visitor Count</a></li>
            <li><a href="#step-7-api-gateway-and-lambda">Step 7: API Gateway and Lambda</a></li>
            <li><a href="#step-8-cicd-with-github-actions">Step 8: CI/CD with GitHub Actions</a></li>
        </ul>
        <li><a href="#issues-and-resolutions">Issues and Resolutions</a></li>
        <li><a href="#conclusion">Conclusion</a></li>
    </ol>

    <h2 id="overview">Overview</h2>
    <p>The AWS Cloud Resume Challenge involves creating a personal resume hosted on AWS with several components:</p>
    <ul>
        <li>Static website hosted on S3</li>
        <li>CloudFront distribution for CDN</li>
        <li>Custom domain with SSL</li>
        <li>Visitor counter using DynamoDB</li>
        <li>API Gateway and Lambda for backend</li>
        <li>CI/CD pipeline with GitHub Actions</li>
    </ul>

    <h2 id="steps-and-solutions">Steps and Solutions</h2>

    <h3 id="step-1-html-and-css">Step 1: HTML and CSS</h3>
    <p>Created a simple HTML and CSS resume page. The HTML file is named <code>index.html</code> and includes links to CSS files for styling.</p>

    <h3 id="step-2-javascript">Step 2: JavaScript</h3>
    <p>Added JavaScript to enhance the resume page. This includes a script to fetch and display the visitor count.</p>

    <h3 id="step-3-s3-bucket-for-static-website-hosting">Step 3: S3 Bucket for Static Website Hosting</h3>
    <p>Configured an S3 bucket for static website hosting:</p>
    <ul>
        <li>Created an S3 bucket and enabled static website hosting.</li>
        <li>Uploaded the HTML, CSS, and JavaScript files to the bucket.</li>
    </ul>

    <h3 id="step-4-cloudfront-for-cdn">Step 4: CloudFront for CDN</h3>
    <p>Set up CloudFront to distribute the content globally:</p>
    <ul>
        <li>Created a CloudFront distribution pointing to the S3 bucket.</li>
        <li>Configured caching and SSL settings.</li>
    </ul>

    <h3 id="step-5-custom-domain-and-ssl">Step 5: Custom Domain and SSL</h3>
    <p>Configured a custom domain and SSL:</p>
    <ul>
        <li>Registered a domain with Route 53.</li>
        <li>Created a certificate in AWS Certificate Manager (ACM) and associated it with the CloudFront distribution.</li>
    </ul>

    <h3 id="step-6-dynamodb-for-visitor-count">Step 6: DynamoDB for Visitor Count</h3>
    <p>Set up DynamoDB to store and retrieve the visitor count:</p>
    <ul>
        <li>Created a DynamoDB table to store the count.</li>
        <li>Configured the table with a primary key.</li>
    </ul>

    <h3 id="step-7-api-gateway-and-lambda">Step 7: API Gateway and Lambda</h3>
    <p>Set up API Gateway and Lambda to interact with DynamoDB:</p>
    <ul>
        <li>Created a Lambda function to update and fetch the visitor count from DynamoDB.</li>
        <li>Configured API Gateway to trigger the Lambda function.</li>
    </ul>

  <h3>Steps to Configure OIDC and SSO/Federation</h3>
  <ol>
      <li>
          <strong>Enable OIDC Provider in AWS IAM:</strong>
          <ul>
              <li>Navigate to the AWS IAM console.</li>
              <li>In the left navigation pane, choose <em>Identity providers</em>, then choose <em>Add provider</em>.</li>
              <li>Select <em>OpenID Connect</em> as the provider type.</li>
              <li>For Provider URL, enter <code>https://token.actions.githubusercontent.com</code>.</li>
              <li>Choose <em>Get thumbprint</em>, and then choose <em>Add provider</em>.</li>
          </ul>
      </li>
      <li>
          <strong>Create an IAM Role for GitHub Actions:</strong>
          <ul>
              <li>In the AWS IAM console, choose <em>Roles</em>, then choose <em>Create role</em>.</li>
              <li>Select <em>Web identity</em> as the type of trusted entity.</li>
              <li>Choose the identity provider you just created and specify the conditions to allow your GitHub repository and branch to assume the role.</li>
              <li>Attach the necessary policies to this role to allow the actions you need (e.g., access to S3, Lambda, etc.).</li>
          </ul>
      </li>
      <li>
  <\ol>
    
    <h2 id="issues-and-resolutions">Issues and Resolutions</h2>
    <p>Encountered several issues during the implementation, including:</p>
    <ul>
        <li>Incorrect trust policy configuration for the IAM role.</li>
        <li>Issues with OIDC provider setup in AWS.</li>
        <li>Resolved by ensuring correct JSON format and accurate IAM role configurations.</li>
    </ul>

    <h2 id="conclusion">Conclusion</h2>
    <p>Successfully completed the AWS Cloud Resume Challenge. This project provided hands-on experience with various AWS services and CI/CD practices, enhancing both cloud and DevOps skills.</p>
</body>
</html>
