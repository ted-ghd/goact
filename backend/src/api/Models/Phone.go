package Models

import (
	"api/Config"
	_ "github.com/jinzhu/gorm/dialects/postgres"
)

func GetAllPhones(phone *[]Phone) (err error) {
	if err = Config.DB.Order("id desc").Find(phone).Error; err != nil {
		return err
	}
	return nil
}

func InsertPhone(phone *Phone) (err error) {
	if err = Config.DB.Create(phone).Error; err != nil {
		return err
	}
	return nil
}

func DeletePhone(phone *Phone, id uint) (err error){
	Config.DB.Where("id = ?", id).Delete(phone)
	return nil
}