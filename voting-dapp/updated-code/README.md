////////////////////////////////////////

//////////////////////////////
const axisoData = async (url) => {
try {
const {
data: { name, address, image, number, age },
} = await axios.get(url);

      console.log(url);
    } catch (error) {
      console.log("Someting wrong", error);
    }

};
