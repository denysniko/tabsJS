import './index.html'
import './sass/styles.scss'

document.addEventListener('DOMContentLoaded', () => {
	const getTabsItem = document.querySelectorAll('.tabs__item')
	const getTabsContent = document.querySelectorAll('.tabs__content')
	const getParentTabs = document.querySelector('.tabs__items')

	const hideTabsContent = () => {
		getTabsContent.forEach(tab => {
			tab.classList.add('hide')
			tab.classList.remove('show', 'fade')
		})

		getTabsItem.forEach(tab => {
			tab.classList.remove('tabs__item_active')
		})
	}

	const showTabsContent = (i = 0) => {
		getTabsContent[i].classList.add('show', 'fade')
		getTabsContent[i].classList.remove('hide')

		getTabsItem[i].classList.add('tabs__item_active')
	}

	const parentTabsItems = () => {
		getParentTabs.addEventListener('click', e => {
			const target = e.target

			if (target && target.classList.contains('tabs__item')) {
				getTabsItem.forEach((item, i) => {
					if (target == item) {
						hideTabsContent()
						showTabsContent(i)
					}
				})
			}
		})
	}

	hideTabsContent()
	showTabsContent()
	parentTabsItems()
})
