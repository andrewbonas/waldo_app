characters = [
  {name:'Waldo', found: false, xCoor: 460, yCoor: 998},
  {name:'Wenda', found: false, xCoor: 492, yCoor: 1247},
  {name:'Whitebeard', found: false, xCoor: 444, yCoor: 441},
  {name:'Odlaw', found: false, xCoor: 440, yCoor: 180}
]

characters.each do |attributes|
  Character.create(attributes)
end
