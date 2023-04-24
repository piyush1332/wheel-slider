const images = ['one.png', 'two.png', 'three.png', 'four.png'];
let active = 2;

const handleActiveImage = (e) => {
  const parentElement = document.getElementById('slider_item_container');
  const sliderItems = parentElement.children;
  const targetElement = e.target;
  for (let i = 0; i <= sliderItems.length - 1; i++) {
    if (sliderItems[i].dataset.source === targetElement.dataset.source) {
      sliderItems[i].querySelector('.active_version').style.display = "block";
    } else {
      sliderItems[i].querySelector('.active_version').style.display = "none";
    }
  }
}

const activeItem = () => {
  if (active <= 2) {
    return [...images].splice(0, 3)
  } else if (active >= 3) {
    const temp = [];
    for (let i = active; i >= active - 2; i--) {
      temp.push(images[i])
    }
    return temp.reverse();
  }
}

const forwardHandler = () => {
  if (images.length - 1 > active) {
    active++;
    renderSlider();
    if (images.length - 1 <= active) {
      document.getElementById('forward_slider').disabled = true;
      document.getElementById('backward_slider').disabled = false;
    }
  }
}

const backwardHandler = () => {
  if (active > 2) {
    active--;
    renderSlider();
    if (active <= 2) {
      document.getElementById('backward_slider').disabled = true;
      document.getElementById('forward_slider').disabled = false;
    }
  }
}

const renderSlider = () => {
  const parentElement = document.getElementById('slider_item_container');
  let sliderItem = '';
  activeItem().forEach((item, index) => {
    sliderItem += `<div class="slider_item" data-source=${index}>
                        <div class="slider_item_image_holder" data-source=${index} >
                      <img src="/assets/${item}" alt="Image Not Available." data-source=${index}>
                    </div>
                    <div class="slider_item_description" data-source=${index}>
                      <div data-source=${index}> 17-INCH CAST ALUMINUM WHEEL, FULLY</div>
                      <div data-source=${index}>PAINTED SILVER LITHO</div>
                      <div data-source=${index}>Standard on Touring FWD</div>
                      <div data-source=${index}> (WGU)</div>
                    </div>
                    <div class="active_version">
                      <div class="slider_item_image_holder" data-source=${index}>
                        <img src="/assets/${item}" alt="Image Not Available." data-source=${index}>
                      </div>
                      <div class="slider_item_description" data-source=${index}>
                        <div class="active_description_Heading" data-source=${index}> 17-INCH CAST ALUMINUM WHEEL, FULLY</div>
                        <div class="active_description_Heading" data-source=${index}>PAINTED SILVER LITHO</div>
                        <div data-source=${index}>Standard on Touring FWD</div>
                        <div class="active_description_Heading" data-source=${index}> (WGU)</div>
                      </div>
                    </div>
                    </div > `;
  })
  parentElement.innerHTML = sliderItem.trim();
}

const initalRender = () => {
  renderSlider();
  document.getElementById('forward_slider').disabled = false;
  document.getElementById('backward_slider').disabled = true;
}

initalRender();