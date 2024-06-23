terraform {
  required_providers {
    aws = {
      version =">=4.9.0"
      source = "hashicorp/aws"
    }
  }
}
provider "aws" {
  secret_key ="secret_key"
  access_key ="access_key"
  region = "us-east-1"
}