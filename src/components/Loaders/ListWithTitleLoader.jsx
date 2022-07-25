import ContentLoader from 'react-content-loader'

const ListWithTitleLoader = () => (
  <ContentLoader
    speed={2}
    width={420}
    height={180}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="5" ry="5" width="420" height="60" />

    <circle cx="10" cy="100" r="8" />
    <rect x="25" y="95" rx="5" ry="5" width="380" height="10" />

    <circle cx="10" cy="130" r="8" />
    <rect x="25" y="125" rx="5" ry="5" width="380" height="10" />

    <circle cx="10" cy="160" r="8" />
    <rect x="25" y="155" rx="5" ry="5" width="380" height="10" />
  </ContentLoader>
)

export default ListWithTitleLoader
