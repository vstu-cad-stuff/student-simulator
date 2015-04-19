import time

class Student:
    """ 
        границы изменения параметров [-100, 100]
        критические границы [-100, -80] U [80, 100]
    """
    # параметр: настроение (0 -- нейтральное)
    mood = 0
    # параметр: успеваемость (0 -- обычная)
    progress = 0
    # параметр: сытость (0 - ...)
    satiety = 0
    # параметр: финансы (0 - ...)
    finances = 0

    """
        назначение: инициализации класса
        входные параметры:
            mood        -- настроение
            progress    -- успеваемость
            satiety     -- сытость
            finances    -- финансы
        выходные параметры:
            None
    """
    def __init__(self, mood=0, progress=0, satiety=0, finances=0):
        self.mood = mood
        self.progress = progress
        self.satiety = satiety
        self.finances = finances
        # дальнейшие настройки

    """
        назначение: изменение параметров во времени
        входные параметры:
            step        -- шаг
        выходные параметры:
            None
    """
    def step(self, step=10):
        # код отвечающий за изменение параметров 
        # в соответствии с интервалом времени
        print('student = {}'.format(time.ctime()))
        
    """
        добавить функцию внешних факторов влияющую на систему
        посредство взаимодействия с окружающими людьми/факторами/случайностями
    """
    # def external(self, ...)