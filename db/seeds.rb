characters = [
  {name:'Waldo', found: false, xCoor: 462, yCoor: 990},
  {name:'Wenda', found: false, xCoor: 495, yCoor: 1236},
  {name:'Whitebeard', found: false, xCoor: 440, yCoor: 433},
  {name:'Odlaw', found: false, xCoor: 443, yCoor: 173}
]

characters.each do |attributes|
  Character.create(attributes)
end
