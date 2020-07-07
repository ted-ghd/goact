package Models

type Phone struct {
	Id uint `json:"id"`
	Name string `json:"name"`
	Phone string `json:"phone"`
}

func (b *Phone) TableName() string {
	return "phone"
}