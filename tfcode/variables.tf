variable "location" {
  default = "centralindia"
}

variable "resource_group_name" {
  default = "demo-devops-rg"
}

variable "app_service_plan_name" {
  default = "demo-appservice-plan"
}

variable "web_app_name" {
  default = "demo-webapp-12345"
}

variable "sql_server_name" {
  default = "demo-sql-server-12345"
}

variable "sql_admin_user" {
    default = "adminuser"
}
variable "sql_admin_password" {
    default = "Password@123"
  sensitive = true
}

variable "sql_db_name" {
  default = "demo-db"
}