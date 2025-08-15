d = document
d.ce = d.createElement
d.gebi = d.getElementById

animationContainer = d.gebi('animationContainer')
animationContainer2 = d.gebi('animationContainer2')
animationContainer3 = d.gebi('animationContainer3')

createItems()
createItems2()
createItems3()

function createItems () {
	for (var i = 0; i < 600; i++) {
		item = d.ce('div')
		item.id = `item${i}`
		item.classList.add('item')
		item.classList.add('move-and-flicker')
		item.style.animationDuration = 1 + 's'
		item.style.animationDelay = '-' + (i * 0.01) + 's'
		animationContainer.appendChild(item)
	}
}

function createItems2 () {
	for (var i = 0; i < 600; i++) {
		item = d.ce('div')
		item.id = `item2-${i}`
		item.classList.add('item')
		item.classList.add('item-blue')
		item.classList.add('move-and-swirl')
		item.style.animationDuration = 1 + 's'
		item.style.animationDelay = '-' + (i * 0.01) + 's'
		animationContainer2.appendChild(item)
	}
}

function createItems3 () {
	for (var i = 0; i < 600; i++) {
		item = d.ce('div')
		item.id = `item3-${i}`
		item.classList.add('item')
		item.classList.add('item-green')
		item.classList.add('pulse-and-color-change')
		item.style.animationDuration = 1 + 's'
		item.style.animationDelay = '-' + (i * 0.01) + 's'
		animationContainer3.appendChild(item)
	}
}