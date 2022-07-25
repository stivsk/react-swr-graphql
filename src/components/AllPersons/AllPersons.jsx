import { useState } from 'react'
import withSuspense from '../../HOCs/withSuspense'
import { useAddPerson } from '../../hooks/useAddPerson'
import { useAllPersons } from '../../hooks/useAllPersons'
import ListWithTitleLoader from '../Loaders/ListWithTitleLoader'

const AllPersons = () => {
  const { allPersons } = useAllPersons()
  const { addPerson } = useAddPerson()

  const [errorMessage, setErrorMessage] = useState()

  const handleAddPersonSubmit = (e) => {
    e.preventDefault()

    const { name, phone, street, city } = e.target

    const newPerson = {
      name: name.value,
      phone: phone.value,
      street: street.value,
      city: city.value
    }

    addPerson(newPerson)
      .then(() => {
        setErrorMessage()
        e.target.reset()
      })
      .catch((err) => {
        setErrorMessage(err.message)
      })
  }

  return (
    <div className="App">
      <h1>GraphQL + React</h1>
      <ol>
        {allPersons.map(person => <li key={person.id}>{person.name} from {person.address.city}</li>)}
      </ol>
      <form onSubmit={handleAddPersonSubmit}>
        <input name='name' placeholder='name' type="text" />
        <input name='phone' placeholder='phone' type="text" />
        <input name='street' placeholder='street' type="text" />
        <input name='city' placeholder='city' type="text" />
        <button type='submit'>
          Add New Person
        </button>
        <div>
          {errorMessage}
        </div>
      </form>
    </div>
  )
}

export default withSuspense(ListWithTitleLoader)(AllPersons)
