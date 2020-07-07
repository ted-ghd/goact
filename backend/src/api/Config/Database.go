package Config

import (
	"fmt"
	"github.com/jinzhu/gorm"
)

var DB *gorm.DB

type DBConfig struct {
	Host string
	Port int
	User string
	DBName string
	Password string
	SslMode string
}

func BuildDBConfig() *DBConfig {
	dbConfig := DBConfig{
		Host:"localhost",
		Port:5432,
		User:"postgres",
		Password:"1234",
		DBName:"postgres",
		SslMode:"disable"}

	return &dbConfig
}

func DbURL(dbConfig *DBConfig) string {
	return fmt.Sprintf(
		"host=%s port=%d user=%s dbname=%s password=%s sslmode=%s",
		dbConfig.Host,
		dbConfig.Port,
		dbConfig.User,
		dbConfig.DBName,
		dbConfig.Password,
		dbConfig.SslMode)
}