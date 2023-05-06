![soft](https://capsule-render.vercel.app/api?type=transparent&fontColor=6FC7E1&text=Webinar%20Cloud%20Dev&fontSize=40&fontAlign=21.5&height=80&animation=twinkling)

## Domain 1 - Cloud Concepts

### What is Cloud?
This is the allocation of web services through the internet where you only pay for what you use. Also known as "pay-as-you-go pricing" by AWS.

#### Benefits:

- **Fast scalability** both horizontally and vertically;
- AWS offers a usage-based payment model, allowing for a **low initial investment**;
- **High availability** ensures service continuity and minimizes downtime by preventing failures;
- **Geographic flexibility**, with AWS you can deploy your applications and services in any geographic region around the world, reducing end-user latency.
  
### What is the AWS infrastructure like?

The AWS infrastructure is organized into **regions**, which are geographic locations where AWS operates multiple data centers. Each region is divided into **availability zones (AZ)**, which are physically separate and isolated data centers that are connected with low latency links.  

### Application deployment models or types:

- **Cloud:** applications and services are deployed and run entirely on cloud infrastructure, such as that provided by AWS;
- **On-premises:** applications and services are deployed and run entirely on infrastructure located within an organization's own data centers or facilities;
- **Hybrid:** applications and services are deployed and run on a combination of both cloud and on-premises infrastructure, allowing organizations to leverage the benefits of both models. 

### Cloud services usage models:

- Infrastructure as a Service (IaaS) 
- Platform as a Service (PaaS)
- Software as a Service (SaaS)

## Domain 2 - Security and Compliance

### Shared responsibility:

- AWS - of the cloud;
- You - in the cloud.

### Recommendations:

- Do not use the Root account;
- Enable MFA (two-factor authentication) on all user accounts, including the Root account;
- Use the principle of least privilege. Grant permissions only for the necessary actions for each user or application's specific functions. This limits the risk of exposure to external attacks;
- Encrypt sensitive data.

## Domain 3 - Technology(Services)

### Ways of access and management:

- Console - Web;
- CLI - Terminal;
- SDK - Libraries.

### Useful Services:

**AWS Identify and Access Management (IAM):** Helps control access to AWS resources and services by defining and managing identities (users, groups, and roles) and their permissions.

**Parameter Store:** is a parameter management service that allows for easy storage and management of configuration data and other sensitive information in key-value format.

**AWS Secrets Manager:** helps you protect and manage sensitive information, such as passwords, API keys, and other confidential data used by AWS applications and services.

----------------

### **Serverless**

Serverless is a cloud computing model in which the cloud service provider manages all the server infrastructure for you, allowing you to focus only on coding and developing applications.

With the serverless model, you don't need to provision servers, manage scalability, or deal with infrastructure maintenance tasks such as security patches or software updates. Instead, you write and run code functions that are executed in an environment managed by the cloud service provider.

Examples: AWS Lambda, Amazon API Gateway, Amazon DynamoDB and Amazon S3.

### AWS Lambda
AWS Lambda is a serverless computing service that allows you to execute your code quickly and scalably without needing to manage servers.
- Uses Runtimes to provide execution environments for the code of the functions that you create on the platform.
- is ideal for stateless activities that can be executed quickly, as its execution is limited to a maximum of **15 minutes**. 

### Amazon API Gateway
Amazon API Gateway is a fully managed service by AWS that allows you to create, publish, monitor, and manage secure APIs for web or mobile applications. 

With Amazon API Gateway, you can create RESTful or WebSocket APIs, which allow connections between clients and servers to remain open for real-time communication.

### Amazon CloudWatch
Amazon CloudWatch is a monitoring and observability service by AWS that provides real-time insights into your cloud resources and applications. 

With Amazon CloudWatch, you can collect and track metrics, collect and monitor log files, and set alarms. 

### Amazon S3
Amazon S3 is an AWS object storage service that enables you to store and retrieve large amounts of data securely and durably. It works with three storage classes:

**Glacier:** for long-term file storage that is rarely accessed. 

**Standard:** for frequently accessed data storage that requires high durability and availability.

**Intelligent-tiering:** for data storage that has unknown or changing access patterns, this class automatically moves objects between S3 Standard and S3 Infrequent Access to optimize costs without sacrificing performance or availability.

### Amazon DynamoDB
Amazon DynamoDB is a fully managed NoSQL database service.
- Key-value
- Provisioned or On-demand

### AWS CloudFormation
AWS CloudFormation is a service that allows you to write your infrastructure in code format, using JSON or YAML code templates. 

It is based on the concept of Infrastructure as Code (IaC), making resource management and provisioning easier and more efficient.

**Advantages:** easier infrastructure scalability, maintenance, and code readability.

## Domain 4 - Billing and costs

There are three main types of Free Tier options:
- Trials 
- 12 Months Free
- Always Free

**AWS Pricing Calculator:** is a tool that allows you to estimate the costs of using AWS services. It is possible to select the AWS services that you want to use and provide information about the intended usage, such as region, usage time, and amount of data transferred. With this information, the tool calculates an estimate of the monthly costs of using the services.


Link mentioned during the practice:
https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html 
