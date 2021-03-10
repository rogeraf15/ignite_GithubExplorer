import { RepositoryItem } from './RepositoryItem';

const repository = {
  name: 'Batata doce',
  description: 'Repo de um batata',
  link: 'https://github.com/rogeraf15'
}

export function RepositoryList(){
    return(
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
               <RepositoryItem repository={repository}/>
               <RepositoryItem repository={repository}/>
               <RepositoryItem repository={repository}/>
               <RepositoryItem repository={repository}/>
               <RepositoryItem repository={repository}/>
            </ul>
        </section>
    )
}