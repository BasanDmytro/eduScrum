import React, {Component} from 'react'
import Board from 'react-trello'

const data = {
  lanes: [
    {
      id: 'lane1',
      title: 'Planned Tasks',
      label: '2/2',
      cards: [
        {id: 'Card1', title: 'Write Blog', description: 'Can AI make', label: '30 mins'},
        {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}}
      ]
    },
    {
      id: 'lane2',
      title: 'Completed',
      label: '1/1',
      cards: [{id: 'Card1', title: 'Write Blog', description: 'Can AI make 32', label: '30 mins'},]
    }
  ]
};

class NewCard extends Component {
  updateField = (field, evt) => {
    this.setState({[field]: evt.target.value})
  }

  handleAdd = () => {
    this.props.onAdd(this.state)
  }

  shouldReceiveNewData = nextData => {
    console.log('Board has changed')
    console.log(nextData)
  }

  handleCardDelete = (cardId, laneId) => {
    console.log(`Card: ${cardId} deleted from lane: ${laneId}`)
  }

  handleCardAdd = (card, laneId) => {
    console.log(`New card added to lane ${laneId}`)
    console.dir(card)
  }

  render() {
    const {onCancel} = this.props;
    return (
      <div>
        <Board
          data={data}
          draggable
          id="EditableBoard1"
          onDataChange={this.shouldReceiveNewData}
          onCardDelete={this.handleCardDelete}
          onCardAdd={this.handleCardAdd}
          onCardClick={(cardId, metadata, laneId) => alert(`Card with id:${cardId} clicked. Card in lane: ${laneId}`)}
          editable
          canAddLanes
        />
        <div style={{background: 'white', borderRadius: 3, border: '1px solid #eee', borderBottom: '1px solid #ccc'}}>
          <div style={{padding: 5, margin: 5}}>
            <div>
              <div style={{marginBottom: 5}}>
                <input type="text" onChange={evt => this.updateField('title', evt)} placeholder="Title" />
              </div>
              <div style={{marginBottom: 5}}>
                <input type="text" onChange={evt => this.updateField('description', evt)} placeholder="Description" />
              </div>
            </div>
            <button onClick={this.handleAdd}>Add</button>
            <button onClick={onCancel}>Cancel</button>
          </div>
        </div>
      </div>
    )
  }
}

export default NewCard;
