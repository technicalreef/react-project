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
  client_id = "94766e19-a34d-4a00-ba7a-f4030b81188f"
  client_secret = "noi8Q~TyZra~pezfrRaHv74qd45jLmTSGJIwBagn"
  tenant_id = "2f601cc3-4c90-4add-9273-abb98fbd48a5"
  subscription_id = "65e6abc0-34eb-493f-9bc6-7df0726783df"
}
