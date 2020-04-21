import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Expolorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/14045736?s=460&u=7b0a45bf18f5340dee90cf5bfb13804a9d534d8e&v=4"
            alt="Victor Hugo Araujo"
          />
          <div>
            <strong>gostack-desafios-typeorm-upload</strong>
            <p>Upload csv files</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/14045736?s=460&u=7b0a45bf18f5340dee90cf5bfb13804a9d534d8e&v=4"
            alt="Victor Hugo Araujo"
          />
          <div>
            <strong>gostack-desafios-typeorm-upload</strong>
            <p>Upload csv files</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/14045736?s=460&u=7b0a45bf18f5340dee90cf5bfb13804a9d534d8e&v=4"
            alt="Victor Hugo Araujo"
          />
          <div>
            <strong>gostack-desafios-typeorm-upload</strong>
            <p>Upload csv files</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
