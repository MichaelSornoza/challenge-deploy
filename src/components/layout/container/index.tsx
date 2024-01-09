export interface IContainerProps {
  children: React.ReactNode
}

const Container = ({ children }: IContainerProps): JSX.Element => {
  return (
    <section className="container">
      {children}
    </section>
  )
}

export default Container
