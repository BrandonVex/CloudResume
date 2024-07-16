resource "aws_lambda_function" "func" {
  function_name = "myfunc"
  handler = "func.lambda_handler"
  runtime = "python3.12"
  role = aws_iam_role.lambda.arn
  filename = data.archive_file.zip.output_path
  source_code_hash = data.archive_file.zip.output_base64sha256
}

resource "aws_iam_role" "iam_for_lambda" {
  name = "iam_for_lambda"

  assume_role_policy =  <<EOF
{ 
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
EOF
}

data "archive_file" "zip" {
  type = "zip"
  source_dir = "${path.module}/lambda/"
  output_path = "${path.module}/func.zip"
}

