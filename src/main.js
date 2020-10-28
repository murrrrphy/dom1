const div = dom.create('<div>newDiv</div>>')
const div1 = dom.create('<div>red</div>')
dom.after(test, div)

dom.attr(test, 'title', 'hi')
dom.append(test, div1)
dom.class.add(div1, 'red')
const div3 = dom.find('#test>.red')[0]
dom.style(div3, 'color', 'red')
const divList = dom.find('.red')
dom.each(divList,(n)=>{console.log(n)})
