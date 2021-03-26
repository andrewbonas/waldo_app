characters = [
  {name:'Waldo', found: false, xCoor: 580, yCoor: 300},
  {name:'Wenda', found: false, xCoor: 722, yCoor: 315},
  {name:'Whitebeard', found: false, xCoor: 258, yCoor: 287},
  {name:'Odlaw', found: false, xCoor: 108, yCoor: 286}
]

characters.each do |attributes|
  Character.create(attributes)
end
