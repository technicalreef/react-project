terraform {
  required_providers {
    azurerm = {
      source = "hashicorp/azurerm"
      version = "4.66.0"
    }
  }

/*
  backend "azurerm" {
    resource_group_name  = "terraform-rg"
    storage_account_name = "terraformstaterg"
    container_name       = "terraform-dev-state"
    key                  = "dev-terraform.tfstate"
  }
*/
}

provider "azurerm" {
  features {}

}