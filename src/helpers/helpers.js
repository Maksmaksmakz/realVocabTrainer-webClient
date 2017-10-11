import Settings from "../data/settings.js"

export function randomProperty (obj) {
    var keys = Object.keys(obj)
    return obj[keys[ keys.length * Math.random() << 0]];
};

export function randomAccessor(accessors) {
  let accessor = accessors[Math.floor(Math.random()* accessors.length)]

  console.log("Accessor: ", accessor , "Accessor == vosotros: ", accessor == "vosotros",
  "Settings[vosotros activated]", Settings["vosotros activated"])

  while(accessor == "vosotros" && !Settings["vosotros activated"]) {
    console.log("in while loop")
    accessor = accessors[Math.floor(Math.random()* accessors.length)]
    console.log(accessor)
  }
  return accessor
}
