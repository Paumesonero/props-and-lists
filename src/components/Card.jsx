import React from 'react'

export default function Card(props) {
  const { animal: { name, lifeExpectancy, description, needsMedicine, image, type } } = props;

  const medicineColor = {
    color: 'red'
  }

  return (
    <div className="card">
      <h3>{name}</h3>
      {image ? <img src={image} width='100%' alt={name} /> : <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Dog_silhouette.svg/2067px-Dog_silhouette.svg.png' width='100%' alt={name} />}
      <p>{description}</p>
      <p>This animal will live {lifeExpectancy} years</p>
      {needsMedicine && <p style={medicineColor}> This {type} needs medicine</p>}
    </div>

  )
}
