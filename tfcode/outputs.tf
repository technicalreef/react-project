output "web_app_url" {
  value = azurerm_linux_web_app.app.default_hostname
}

output "sql_server_name" {
  value = azurerm_mssql_server.sql.name
}