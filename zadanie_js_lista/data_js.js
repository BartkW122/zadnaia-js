let todoStatus = {
	active: 'Aktywne',
	done: 'Zrobione',
	reject: 'Odrzucone'
}


let listTodo = [
	{
		id:1,
		title: 'Wizyta u lekarza',
		stop_date: new Date('2022-04-22 00:00:00'),
		status: todoStatus.active,
		prior: 1
	},
	{
		id:2,
		title: 'Przygotowanie oferty dla klienta',
		stop_date: new Date('2022-05-30 00:00:00'),
		status: todoStatus.reject,
		prior: 1
	},
	{
		id:3,
		title: 'Wymiana opon',
		stop_date: new Date('2024-04-18 00:00:00'),
		status: todoStatus.done,
		prior: 1
	},
	{
		id:4,
		title: 'Praca klasowa z JS',
		stop_date: new Date('2024-04-25 00:00:00'),
		status: todoStatus.active,
		prior: 1
	}
]
