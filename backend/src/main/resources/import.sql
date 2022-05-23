INSERT INTO tb_about(title, description) VALUES ('BEM VINDO,', 'Meu nome é Diego Vicente Pereira , atualmente estou cursando Análise e Desenvolvimento de Sistemas pelo Centro Universitário Internacional Uninter. Tenho conhecimentos em Java , Spring Boot , React , Javascript, Typescript, HTML, CSS, Postgres, Docker, AWS, testes unitários e de integração, seguindo o modelo TDD.');

INSERT INTO tb_project(title, name, note, text, link) VALUES ('DEPLOY', 'GitHub', 'https://dio-git-challenge.netlify.app/','Primeiro desafio do Bootcamp da Digital Innovation One.O desafio consiste em criar um repositório no GitHub com as informações sobre o conteúdo dos cursos que estão sendo realizados.Criei um mini-portfólio utilizando SpringBoot e ReactJS.Para mais informações acesse o link do repositório','https://github.com/DiegoVP66/DIO-GIT-CHALLENGE');

INSERT INTO tb_user (name,  email,  password) VALUES ('Diego',  'vp.diego28@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (authority) VALUES ('ROLE_ADMIN');
INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);