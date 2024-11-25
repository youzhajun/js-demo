var provinceDiv = document.querySelector('#province')
var cityDiv = document.querySelector('#city')

/**
 * 初始化数据，省级数据
 */
function initProvince() {
  buildOptions(provinceDiv, null)
}

/**
 * 获取下拉框选中值
 * @param {下拉框} select
 * @param {上一个被选中的值} code
 */
function buildOptions(select, code) {
  var id = select.getAttribute('id')
  var db
  if ('province' === id) {
    db = provinceObject
  } else if ('city' === id) {
    db = queryByName(cityObject, code, 'province')
  } else if ('town' === id) {
    db = queryByName(countyObject, code, 'city')
  }
  var keys = Object.keys(db)
  select.innerHTML = ''
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index]
    var item = db[key]
    var option = document.createElement('option')
    option.setAttribute('value', item.name)
    option.innerText = item.name
    select.append(option)
  }
}

/**
 * 从数据库中获取数据
 * @param {} db
 * @param {*} name
 * @param {*} code
 * @returns
 */
function queryByName(db, name, code) {
  var keys = Object.keys(db)
  var result = []
  for (let index = 0; index < keys.length; index++) {
    const element = keys[index]
    const item = db[element]
    if (item[code] === name) {
      result.push(item)
    }
  }
  var arr = result.reduce((acc, item) => {
    acc[item.id] = { id: item.id, name: item.name }
    return acc
  }, {})
  return arr
}

/**
 * 按钮事件
 */
provinceDiv.addEventListener('change', function () {
  buildOptions(cityDiv, this.value)
})

initProvince()
