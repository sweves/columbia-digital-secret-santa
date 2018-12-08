function Crystal(_x, _y) {
  this.x = _x
  this.y = _y

  this.display = function() {
    imageMode(CENTER)
    image(crystal, this.x, this.y, 206, 296)
  }
}
