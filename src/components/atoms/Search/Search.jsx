import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTags } from '../../../core/services/tags.service'
import search from './Search.module.css'

const Search = ({ handle }) => {
  const { tags, loading } = useSelector((state) => state.getTagsReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTags())
  }, [])

  return (
    <div className={search['c-filter']}>
      <p>Filtrar por tags</p>
      <input
        className={search['c-input']}
        type="text"
        list="browsers"
        onInput={handle}
      ></input>
      <datalist id="browsers">
        {loading !== 'loading' &&
          tags.map((tag, idx) => <option key={idx} value={tag} />)}
      </datalist>
    </div>
  )
}

export { Search }
